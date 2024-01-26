import { GithubAccessTokenEmail } from './emailJS/github.js';
import { render } from '@react-email/render';
import fs from 'fs';

const html = render((GithubAccessTokenEmail({username: "hello world"})))

console.log(html);

fs.writeFile('output.html', html, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('Successfully wrote HTML to output.html');
});