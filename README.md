# Personal Portfolio — Shagiththika Nanthakumar

A clean, modern, and professional portfolio website created for **Shagiththika Nanthakumar**, an Information Technology undergraduate at the University of Kelaniya. 

This website features custom scroll reveals, sticky menu resizing, responsive layouts, a tech marquee loop, and modal popups for course certifications.

---

## 📂 Project Structure

```bash
porfolio/
├── assets/
│   ├── profile.svg                    # Placeholder profile photo
│   ├── task-manager-screenshot.svg    # Placeholder for Task Manager screenshots
│   ├── bookshop-screenshot.svg        # Placeholder for Book Shop Swing app screenshots
│   ├── certificate-moratuwa.svg       # Placeholder certificate (Moratuwa)
│   ├── certificate-simplilearn.svg    # Placeholder certificate (Simplilearn)
│   ├── certificate-devtown.svg         # Placeholder certificate (Devtown)
│   └── certificate-google.svg         # Placeholder certificate (Google/Coursera)
├── index.html                         # Primary semantic layout structure
├── style.css                          # Custom CSS variables, responsive styles, & animations
└── script.js                          # Intersection observers, modal logic, & nav triggers
```

---

## 🔄 How to Upload and Replace Placeholders

When your real assets are ready, place them in the `assets/` directory and update the corresponding filenames in `index.html` as outlined below:

### 1. Professional Profile Photo
* **Location in code**: [index.html](file:///Users/shagiththikananthakumar/Desktop/porfolio/index.html#L99)
* **How to update**: Add your photo to `assets/` (e.g. `profile.jpg` or `profile.png`), then change the image tag's `src` attribute:
  ```html
  <img src="assets/profile.jpg" alt="Shagiththika Nanthakumar" id="hero-profile-img">
  ```

### 2. Task Management System Screenshots
* **Location in code**: [index.html](file:///Users/shagiththikananthakumar/Desktop/porfolio/index.html#L249)
* **How to update**: Add your project screenshots to `assets/` (e.g., `task-dashboard.png`), then modify the image src inside the project card:
  ```html
  <img src="assets/task-dashboard.png" alt="Task Management System Dashboard" class="project-img active">
  ```

### 3. Online Book Shop Screenshots
* **Location in code**: [index.html](file:///Users/shagiththikananthakumar/Desktop/porfolio/index.html#L299)
* **How to update**: Save your Java Swing window capture inside `assets/` (e.g., `bookshop-window.png`), then modify the image src inside the second project card:
  ```html
  <img src="assets/bookshop-window.png" alt="Online Book Shop Interface" class="project-img active">
  ```

### 4. Curriculum Vitae (CV) Download Link
* **Location in code**:
  * Hero Section Button: [index.html](file:///Users/shagiththikananthakumar/Desktop/porfolio/index.html#L79)
  * Resume Section Box: [index.html](file:///Users/shagiththikananthakumar/Desktop/porfolio/index.html#L418)
* **How to update**: Place your PDF file inside `assets/` naming it `cv.pdf`. (If you use another name like `My_CV.pdf`, make sure to update the `href` attribute in both files).

### 5. Professional Certificate Layouts
* **Location in code**: [index.html](file:///Users/shagiththikananthakumar/Desktop/porfolio/index.html#L351-L394)
* **How to update**: Add your certificate images to `assets/` (e.g., `cert-webdesign.jpg`). In the certification card, change both the `data-cert` attribute and the image tag `src`:
  ```html
  <div class="cert-card reveal reveal-up" data-cert="assets/cert-webdesign.jpg" data-title="Web Design for Beginners" ...>
    <div class="cert-visual-preview">
      <img src="assets/cert-webdesign.jpg" alt="Web Design for Beginners Certificate">
      ...
    </div>
  </div>
  ```

---

## 🎨 Design Theme Customization
All core styling values are specified using CSS variables at the top of the `style.css` stylesheet under `:root`. 

If you wish to change the Indigo accent color in the future to another shade (e.g., violet or royal blue), change the hex values under these variables:
```css
--color-accent: #4F46E5;        /* Change this hex to change your accent color */
--color-accent-hover: #4338CA;  /* Accent color when hovered */
--color-accent-glow: rgba(79, 70, 229, 0.1);
```

---

## 💡 Custom Contributions Section
To customize individual contributions under the **Projects** section:
* Find the `<div class="project-contribution">` block inside the specific project in [index.html](file:///Users/shagiththikananthakumar/Desktop/porfolio/index.html).
* Overwrite the placeholder text inside the `<p class="contribution-text">` element with your actual individual accomplishments.
