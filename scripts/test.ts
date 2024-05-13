import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();  // Load environment variables from .env file
import {stringToSlug} from '@/app/components/tools/stringToSlug';

const inputText = process.argv[2];
console.log(inputText);

function main(input: string) {
console.log(input);
    console.log(stringToSlug(input));
}

let runText =`"This is a test"`


if (!!inputText) {
    runText = inputText;

}

main(runText);

