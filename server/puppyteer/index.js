import puppeteer from 'puppeteer';

const url = "https://www.coursera.org/courses?query=computer%20science&productDifficultyLevel=Beginner";

const main = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });





    
    // Get all the courses
    const allCourses = await page.evaluate(() => {
        // Select the product cards that contain courses
        const courses = document.querySelectorAll('li'); // Adjust to the correct class if needed
        return Array.from(courses).slice(0, 3).map(course => {
            const imageElement = course.querySelector('img'); // Get the image element
            const imageUrl = imageElement ? imageElement.src : null; // Handle cases where the image might not exist
            return { courses };
        });
    });

    console.log(allCourses); // Log the image URLs of the courses
    await browser.close();
};

main();
