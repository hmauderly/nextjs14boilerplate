import OpenAI from 'openai';
import dotenv from 'dotenv';
const inputText = process.argv[2];
const OPENAI_KEY = process.env.OPENAI_KEY;
const OPENAI_PROJECT = process.env.OPENAI_PROJECT;
const OPENAI_ORG = process.env.OPENAI_ORG;

dotenv.config();  // Load environment variables from .env file

const openai = new OpenAI({
    apiKey: OPENAI_KEY,
    project: OPENAI_PROJECT,
    organization: OPENAI_ORG,
});

async function main(input: string) {
    const params: OpenAI.Chat.ChatCompletionCreateParams = {
        messages: [
            {
                role: "user",
                content: input,
            },
            ],
        model: 'gpt-4-turbo',
    };
    const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);
    console.log(chatCompletion.choices[0].message);
}

const input_markdown =`"Je voudrais un article sur les figures de l'islam.  format the result  as markdown.

					Look at the structure and use the appropriate headings, plus any bullet points or hyperlinks.
                    Only use the following syntax:
                	## Heading
					### Subheading
					* list
					*italic*
					**bold**
					[link](url)
                    Do not change the text in any other way.
                    Output raw markdown and do not include any explanation or commentary."`

let runText = "This is a test";

if (!!inputText) {
    runText = inputText;

}

main(runText);
