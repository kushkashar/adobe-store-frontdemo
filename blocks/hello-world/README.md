# Hello World Block

## Overview

A custom demonstration block for Adobe Edge Delivery Services that showcases how to create interactive, styled components.

## Features

- 🚀 Responsive design with CSS Grid
- 🎨 Modern gradient styling with animations
- 📱 Mobile-first approach
- ⚡ Interactive button with JavaScript
- 🌙 Dark mode support
- 📄 Print-friendly styles

## Integration

### Block Configuration

The block supports the following configuration options via `readBlockConfig()`:

| Configuration Key | Type | Default | Description | Required |
|-------------------|------|---------|-------------|----------|
| `title` | string | `'Hello World!'` | Main heading text | No |
| `subtitle` | string | `'Welcome to your custom Edge Delivery Services block!'` | Subtitle text | No |
| `buttonText` | string | `'Get Started'` | Button label text | No |

### Usage in Universal Editor

To use this block in the Universal Editor:

1. **Create a new page or edit an existing page**
2. **Add a new section**
3. **Add the Hello World block** by typing the block name
4. **Configure the block** by adding configuration in a table format:

```
Hello World
title | My Custom Title
subtitle | This is my custom subtitle
buttonText | Click Me!
```

### Example Content Structure

In your document authoring system, create content like this:

```
Hello World
title | Welcome to Our Site
subtitle | Discover amazing features with our custom block
buttonText | Explore Now
```

## Behavior Patterns

### Page Context Detection
- **Standard Mode**: Displays with default configuration
- **Custom Mode**: When configuration is provided, uses custom title, subtitle, and button text

### User Interaction Flows
1. **Block Load**: Animates in with fade and slide effects
2. **Feature Hover**: Individual feature items lift and highlight on hover  
3. **Button Click**: Shows an alert message (can be customized for real functionality)
4. **Responsive Behavior**: Adapts layout for mobile devices

### Animation Details
- **Container**: Fades in with upward slide motion
- **Features**: Staggered animation with individual delays
- **Interactive Elements**: Smooth hover transitions with transform effects

## Customization

### Styling Variables
The block uses CSS custom properties for consistent theming:
- `--spacing-*` for consistent spacing
- `--type-*-font` for typography
- `--shape-border-radius-*` for consistent border radius
- `--shape-shadow-*` for consistent shadows

### JavaScript Customization
Modify the `decorate` function in `hello-world.js` to:
- Add more interactive features
- Connect to external APIs
- Implement different layouts based on configuration
- Add more sophisticated animations

## Technical Details

- **File Structure**: `/blocks/hello-world/`
- **Main Script**: `hello-world.js`
- **Styles**: `hello-world.css`
- **Framework**: Adobe Edge Delivery Services
- **Browser Support**: Modern browsers with CSS Grid support