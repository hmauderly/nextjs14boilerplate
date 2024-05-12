// Puppeteer Scrapper + OpenAI
const puppeteer = require('puppeteer');
const { Configuration, OpenAIApi } = require('openai');
const fs = require('fs');

const configuration = new Configuration({
    apiKey: 'sk-******',
});
const openai = new OpenAIApi(configuration);

async function generateSEOContent(prompt) {
    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        });

        return response.data.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error generating SEO content:', error);
        return '';
    }
}


async function generateProjectName(prompt) {
    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        });

        return response.data.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error generating project name:', error);
        return '';
    }
}

async function generateCategoriesAndSubcategories(prompt) {
    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        });

        const categoriesAndSubcategories = response.data.choices[0].message.content.trim();
        console.log('categoriesAndSubcategories:', categoriesAndSubcategories);

        const categoryMatch = categoriesAndSubcategories.match(/categories: (\[[^\]]+\])/);
        const subcategoryMatch = categoriesAndSubcategories.match(/subcategories: (\[[^\]]+\])/);

        const categories = categoryMatch ? JSON.parse(categoryMatch[1]) : [];
        const subcategories = subcategoryMatch ? JSON.parse(subcategoryMatch[1]) : [];

        return { categories, subcategories };
    } catch (error) {
        console.error('Error generating categories and subcategories:', error);
        return { categories: [], subcategories: [] };
    }
}


async function getTextFromURL(url) {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    try {
        await page.goto(url, { waitUntil: 'networkidle2' });

        const text = await page.evaluate(() => {
            return document.body.innerText;
        });

        await browser.close();
        return text;
    } catch (error) {
        console.error(`Error fetching text from URL: ${url}`, error);
        await browser.close();
        return '';
    }
}



async function main(url) {
    const text = await getTextFromURL(url);

    const projectNamePrompt = `Get the project name for the following website content, only output the name:\n\n${text}\n\n`;
    const projectName = await generateProjectName(projectNamePrompt);


    const seoTitlePrompt = `Generate an SEO optimized title for the following website content:\n\n${text}\n\n`;
    const seoTitle = await generateSEOContent(seoTitlePrompt);
    console.log('SEO Title:', seoTitle);

    const seoShortDescPrompt = `Generate an SEO optimized short description for the following website content:\n\n${text}\n\n`;
    const seoShortDesc = await generateSEOContent(seoShortDescPrompt);
    console.log('SEO Short Description:', seoShortDesc);

    const seoLongDescPrompt = `Generate an SEO optimized long description between 1000-1500 characters for the following website content:\n\n${text}\n\n`;
    const seoLongDesc = await generateSEOContent(seoLongDescPrompt);
    console.log('SEO Long Description:', seoLongDesc);

    const categoryPrompt = `Here is a list of categories and their subcategories, only use these options: 
  text:[copywriting,email assistant,general writing,prompts,seo,social media assistant,summarizer]
  image:[art,avatars,design assistant,image editing,image generation,logo generation]
  code:[code assistant,low-code,no-code]
  audio:[audio editing,music,text to speech,transcriber]
  video:[personalized videos,video editing,video generation]
  business:[customer support,e-commerce,education assistant,finance,human resources,legal,presentations,productivity,real estate,sales,marketing]
  other:[dating,experimental,fitness,gaming,healthcare,life assistant,research,resources,search engine,travel]

  Analyze the following website content and assign it to categories and subcategories: ${seoLongDesc}
  Return output in this format:
  categories: ["categories", "categories"]
  subcategories: ["subcategories", "subcategories","subcategories"]`;
    const categoriesAndSubcategories = await generateCategoriesAndSubcategories(categoryPrompt);


    const output = {
        projectName: removeOuterQuotes(projectName),
        url: removeOuterQuotes(url),
        seoTitle: removeOuterQuotes(seoTitle),
        seoShortDesc: removeOuterQuotes(seoShortDesc),
        seoLongDesc: removeOuterQuotes(seoLongDesc),
        categories: categoriesAndSubcategories.categories,
        subcategories: categoriesAndSubcategories.subcategories,
    };

    console.log('output', output);

    fs.readFile('output.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading output.json:', err);
            return;
        }

        // Parse the content of the file as a JSON array
        const projects = JSON.parse(data);

        // Add the new output to the array
        projects.push(output);

        // Write the updated array back to the file
        fs.writeFile('output.json', JSON.stringify(projects, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Error writing to output.json:', err);
            } else {
                console.log('Project output added to output.json.');
            }
        });
    });
}

async function processURLs() {
    const outputArray = [];
    const urls = readURLsFromFile('urls2.json');

    for (const url of urls) {
        const output = await main(url);
        outputArray.push(output);
    }

    // You can also write the outputArray to a JSON file if needed.
    fs.writeFileSync('output2.json', JSON.stringify(outputArray, null, 2));
}

processURLs();

function removeOuterQuotes(str) {
    if (!str) return str;
    if (str.startsWith('"') && str.endsWith('"')) {
        return str.slice(1, -1);
    }
    return str;
}


function readURLsFromFile(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
}