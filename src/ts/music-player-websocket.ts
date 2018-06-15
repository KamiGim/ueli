import { IpcChannels } from "./ipc-channels";
import { InfoSender, MusicInfoHandler } from "./music-info-handler";
import * as ws from "ws";

export class MusicPlayerWebSocket {
    public artist: MusicInfoHandler<string>;
    public cover: MusicInfoHandler<string>;
    public sender: InfoSender;
    public state: MusicInfoHandler<boolean>;
    public rating: MusicInfoHandler<number>;
    public title: MusicInfoHandler<string>;
    public connectStatus: MusicInfoHandler<boolean>;
    private socket: ws;
    private server: ws.Server;
    private port: number;

    constructor(port: number, sender: InfoSender) {
        this.title = new MusicInfoHandler(sender, IpcChannels.playerTrack);
        this.artist = new MusicInfoHandler(sender, IpcChannels.playerArtist);
        this.cover = new MusicInfoHandler(sender, IpcChannels.playerAlbumCover);
        this.state = new MusicInfoHandler(sender, IpcChannels.playerState);
        this.rating = new MusicInfoHandler(sender, IpcChannels.playerLikeTrack);
        this.connectStatus = new MusicInfoHandler(sender, IpcChannels.playerConnectStatus);
        this.port = port;
        this.attemptConnect();
    }

    public sendCommand(command: string) {
        this.socket.send(command);
    }

    private attemptConnect() {
        this.server = new ws.Server({ port: this.port });

        this.server.on("connection", (websocket) => {

            this.connectStatus.value = true;

            this.socket = websocket;

            websocket.on("message", (message: string) => {
                this.formatMessage(message);
            });

            websocket.onclose = (event: any) => {
                this.connectStatus.value = false;
            };
        });
    }

    private formatMessage(m: string) {
        const n = m.indexOf(":");
        const type = m.substring(0, n);
        const info = m.substring(n + 1);
        switch (type) {
            case "TITLE":       this.title.value     = info; break;
            case "ARTIST":      this.artist.value    = info; break;
            case "COVER":       this.cover.value     = info; break;
            case "STATE":       this.state.value     = parseInt(info, 10) === 1; break;
            case "RATING":       this.rating.value     = parseInt(info, 10); break;
        }
    }
}
