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
 

### Changes in React Component (`Details`)

1. **State Management**:
   - Introduced `selectedRole` state to keep track of which role (`Customer` or `Store`) is currently selected for visual feedback.
   - Initialized `role` state to manage the selected role that will be used for form submission.

   ```javascript
   const [role, setRole] = useState(null);
   const [selectedRole, setSelectedRole] = useState(null);
   ```

2. **Role Selection Handling**:
   - Updated `onClick` handlers for `photo1-role` (Customer) and `photo2-role` (Store) to update both `role` and `selectedRole` states.

   ```javascript
   <div className='photo1-role' onClick={() => { setRole("customer"); setSelectedRole("customer"); }}>
       Customer
   </div>
   <div className='photo2-role' onClick={() => { setRole("store"); setSelectedRole("store"); }}>
       Store
   </div>
   ```

3. **Visual Feedback**:
   - Conditionally applied a `selected` class to `photo1-role` and `photo2-role` based on the `selectedRole` state to change their background color (or any other styling).

   ```javascript
   <div className={`photo1 ${selectedRole === "customer" ? "selected" : ""}`}>
       {/* Customer content */}
   </div>
   <div className={`photo2 ${selectedRole === "store" ? "selected" : ""}`}>
       {/* Store content */}
   </div>
   ```

4. **Form Submission**:
   - Updated the `onSubmit` function to check if a role has been selected (`role !== null`) before proceeding with form submission logic.

   ```javascript
   const onSubmit = (data, e) => {
       // Form submission logic based on selected role
   };
   ```

### Changes in CSS (`Detail.css`)

1. **Added Selected State Styling**:
   - Introduced a `.selected` class to change the background color (or any other style) of the selected role.

   ```css
   .photo1.selected .photo1-role,
   .photo2.selected .photo2-role {
       background-color: #41D3BD; /* Example selected color */
       /* Add any other styling you want for selected state */
   }
   ```

2. **Other CSS Adjustments**:
   - You may adjust other styles as per your design requirements, ensuring visual consistency and clarity in role selection.

   ```css
   .photo1-role,
   .photo2-role {
       width: 10vw;
       height: 5vh;
       background: #41D3BD;
       box-shadow: 0px 2.73786px 15px #C4C4C4;
       border-radius: 68.4466px;
       font-family: 'Source Sans Pro';
       font-weight: 500;
       font-size: 1.2em;
       color: #FFFFFF;
       display: grid;
       place-items: center;
       cursor: pointer;
   }

   .photo2-role {
       background: #304D6D;
       position: absolute;
       top: 87%;
   }

   /* Add any other necessary styles */
   ```

### Summary

These changes enable your React component to provide interactive feedback when the user selects their role (`Customer` or `Store`). The `selectedRole` state manages visual feedback, while the `role` state manages the actual role selected for form submission. CSS adjustments ensure that the selected role is visually distinguishable, enhancing the user experience by providing clear feedback on their selection. Adjustments can be further refined based on specific design requirements and user interface considerations.
