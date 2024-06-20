# QueueManagement-main
 Here are the changes made to the CSS to enhance the professional and aesthetic appearance of the navbar:

Navbar Background Color:

Changed the background color to #192839 (a dark blue) to give a more professional look.
Logo Container:

Set the width to auto to dynamically adjust based on the content.
Ensured the elements are evenly spaced and aligned centrally.
Logo Text:

Changed the color to #FFFFFF (white) for high contrast against the dark background.
Slightly reduced the font size to 1.6em for better proportion and balance.
Maintained a font weight of 600 for emphasis and a professional appearance.
Applied text-transform: uppercase to make the text uppercase for a more formal look.
Added letter-spacing: 0.05em for improved readability.
Ensured no default margin is applied by setting margin: 0.
Navigation Menu:

Set the width to auto to dynamically adjust based on the content.
Aligned items centrally vertically for a uniform appearance.
Used justify-content: space-between to spread menu items evenly within the available space.
Logo Changes:

Trace the path of the logo in the Build/Static files and the src/components/Assets to locate the PNG and the SVG Logo picture and name.
Search for a substitute picture and paste in the exact folders and renaming in the same as the previous logo in order to subtitute the logo design.
That allows to simpply reload the code and the new logo will be demonstrated.
The only step is specifying the right file type as PNG for one and SVG for the other.
logo changes and navbar re-coloured 6. **HomePage Colour changes**: -Changes the colours of the Class card at the Homepage.module.css in order to make the shops pop out more for user view. -Adding lighter colours to the background allows the shop or Card Class to be the main view with its darker colours. homepage colour changes.

Here are the changes made to the CSS to enhance the professional and aesthetic appearance of the navbar:

1. **Navbar Background Color**:
   - Changed the background color to `#192839` (a dark blue) to give a more professional look.
   
2. **Logo Container**:
   - Set the width to `auto` to dynamically adjust based on the content.
   - Ensured the elements are evenly spaced and aligned centrally.
   
3. **Logo Text**:
   - Changed the color to `#FFFFFF` (white) for high contrast against the dark background.
   - Slightly reduced the font size to `1.6em` for better proportion and balance.
   - Maintained a font weight of `600` for emphasis and a professional appearance.
   - Applied `text-transform: uppercase` to make the text uppercase for a more formal look.
   - Added `letter-spacing: 0.05em` for improved readability.
   - Ensured no default margin is applied by setting `margin: 0`.
   
4. **Navigation Menu**:
   - Set the width to `auto` to dynamically adjust based on the content.
   - Aligned items centrally vertically for a uniform appearance.
   - Used `justify-content: space-between` to spread menu items evenly within the available space.

5. **Logo Changes**:
   - Trace the path of the logo in th build/Static files and the src/components/Assetsto locate the PNG and the SVG Logo picture and name.
   - Search for a substitute picture of the logo and paste to the specific paths where the logo's are located  and rename it similar to the previous logo in order to replace the logo design.
   - That allows to simply reload the code and the new logo will be demonstrated.
   - the only step is specifying the right file type as PNG for one and the SVG for the other.
   <img width="929" alt="logo changes and navbar re-coloured" src="https://github.com/chikoondoj/QueueManagement-main/assets/170455389/fa05f9df-acc9-452b-889c-58c41bf8c238">
6. **HomePage Colour Changes**:
   -Changes to the colour of the class "card" at the Homepage.module.css in order to make the shops pop out for user view.
   -Adding ligher colours to the backgroung allows the shop or Class "card" to be the main view with its darker colours.
   <img width="926" alt="homepage colour changes" src="https://github.com/chikoondoj/QueueManagement-main/assets/170455389/91f42120-dc7d-4758-9a4a-cd5a64ffa65e">
   
 7. **validation**
   - The validation logic in the code might had additional rules that were not met by the provided numbers, we had to  Review the validation code to understand what rules were applied and to  ensure the input meets those rules..
**before**
   - ![Screenshot (11)](https://github.com/chikoondoj/QueueManagement-main/assets/171292021/d63d8f7c-17c9-4efa-ab09-7539dab3dff4)
   - 
 8. **Objective**
The objective of this task was to enhance the visual appeal of the login page by changing the background to a vertical gradient that starts darker at the top and lightens towards the bottom. Additionally, the font for the login heading was updated to a more appealing typeface.

**Changes Made**
Addition of Google Font

**Description:** Introduced the "Poppins" font from Google Fonts to be used for the login heading.
**Implementation:**
Updated the public/index.html file to include the Google Fonts link in the <head> section.
html
Copy code
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <div id="root"></div>
</body>
</html>
**Update to CSS File**

Description: Applied the "Poppins" font to the login heading and set a vertical gradient background for the entire signup page.
Implementation:
Modified the login.css file to include the new font and background styling:
css
Copy code
/* login.css */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.Signup-Page {
    background: linear-gradient(to bottom, grey, lightgrey);
}

.login-heading {
    height: 47vh;
    width: 34vw;
    position: relative;
    display: flex;
    align-items: center;
    left: -3%;
    font-family: 'Poppins', sans-serif;
}
.login-heading > p {
    color: #0934ac;
    font-size: 5em;
    font-weight: 700; 
}
.login-heading > p > span {
    color: #0934ac;
}
.signup-head {
    position: absolute;
    top: 108%;
    left: 31.5%;
    font-family: 'Source Sans Pro';
    font-size: 1.3em;
}
.signup-head > span {
    cursor: pointer;
    color: #27005a;
    text-decoration: underline;
}
.radio-button {
    display: flex;
    justify-content: space-between;
    width: 20vw;
    position: absolute;
    top: 18%;
    left: 29%;
}
#field-store, #field-customer {
    position: relative;
    left: -5%;
    cursor: pointer;
}
.label-data {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    color: #0934ac;
    font-size: 1.4em;
}
.emails, .passwords {
    position: absolute;
    top: 30%;
    left: 28%;
}
.passwords {
    top: 54%;
}
.forgot {
    position: absolute;
    top: 78%;
    left: 29%;
}
.forgot > u {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    cursor: pointer;
    color: #0934ac;
    font-size: 1.3em;
}

After making the above changes, the application was run locally to verify that:
The background of the login page displayed a gradient transitioning from dark grey at the top to light grey at the bottom.
The login heading text used the "Poppins" font, enhancing its visual appeal.
