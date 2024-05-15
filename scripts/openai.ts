import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();  // Load environment variables from .env file
const OPENAI_KEY = process.env.OPENAI_KEY;
const OPENAI_PROJECT = process.env.OPENAI_PROJECT;
const OPENAI_ORG = process.env.OPENAI_ORG;


const [node, script, input_text, input_type, input_markdown] = process.argv;


const openai = new OpenAI({
    apiKey: OPENAI_KEY,
    project: OPENAI_PROJECT,
    organization: OPENAI_ORG,
});

async function main(input: string,type: string, markdown: string) {
    let ask = "Generate ";
    let markdonContent = false;
    if (markdown === "true") {
        markdonContent = true;
    }
    let openaiModel: string;
    openaiModel = 'gpt-4-turbo';
    switch(type) {
        case "article": {
            ask += "un article optimisé sur ce sujet: ";//statements;
            break;
        }
        case "description": {
            ask += "une description optimisée de 100 characteres maximum de ce contenu: ";///statements;
            break;
        }
        case "keywords": {
            ask += "20 mots clé SEO séparés par une virgule décrivant ce contenu: ";///statements;
            break;
        }
        case "image": {
            ask += "une image 1024x1024   ";///statements;
            openaiModel = 'dall-e-2';
            break;
        }
        default: {
            console.log("OpenAI inout Error ")
            process.exit(1);
            break;
        }
    }
    ask += input;
    if (markdonContent) {ask += markdow_promp}
    console.log(ask);



    const params: OpenAI.Chat.ChatCompletionCreateParams = {

        messages: [
            {
                role: "user",
                content: ask
            },
        ],
        model: openaiModel,
    };

    if (type === "image") {
        params.model = "dall-e-3";
        params.max_tokens = 64;
        console.log(ask);
        try {
            const response: any = await openai.images.generate({
                prompt: ask,
                n: 1, //number of images
                size: "1024x1024",
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }

    } else {
        const chatCompletion: OpenAI.Chat.ChatCompletion = await openai.chat.completions.create(params);
        console.log(chatCompletion.choices[0].message);
    }
}

if ((typeof input_text === 'undefined') ||  (typeof input_type === 'undefined') ) {
    console.log("Need parameters: Use ./scipts.ts text type{article, description, keywords, image} markdown{true, false}")
    process.exit(1);

}
const markdown: string = input_markdown ?? false;
const type = input_type ?? "article";
const text: string = input_text ?? "This is a test";

const markdow_promp =`". format the result  as markdown.

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


main(text, type, markdown);

