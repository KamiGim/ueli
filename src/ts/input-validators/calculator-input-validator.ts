import { InputValidator } from "./input-validator";
import * as math from "mathjs";

export class CalculatorInputValidator implements InputValidator {
    public isValidForSearchResults(userInput: string): boolean {
        if (userInput.indexOf("version") > -1) {
            return false;
        }

        let result: any;
        try {
            // Mathjs throws an error when input cannot be evaluated
            result = math.eval(userInput);
        } catch (e) {
            return false;
        }
        return !isNaN(result) || this.isValidMathType(result) || false;
    }

    private isValidMathType(input: any): boolean {
        if (input === undefined) {
            return false;
        }

        const mathType = math.typeof(input);

        if ((mathType === "Unit" && input.value === null)
            || (mathType === "Function")) {
            return false;
        }

        return true;
    }
}
