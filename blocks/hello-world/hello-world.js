import { readBlockConfig } from '../../scripts/aem.js';

/**
 * Decorates the hello-world block
 * @param {Element} block The hello-world block element
 */
export default async function decorate(block) {
  // Read configuration from the block
  const config = readBlockConfig(block);
  
  // Clear the block content
  block.textContent = '';
  
  // Create the main container
  const container = document.createElement('div');
  container.classList.add('hello-world-container');
  
  // Create title
  const title = document.createElement('h2');
  title.classList.add('hello-world-title');
  title.textContent = config.title || 'Hello World!';
  
  // Create subtitle
  const subtitle = document.createElement('p');
  subtitle.classList.add('hello-world-subtitle');
  subtitle.textContent = config.subtitle || 'Welcome to your custom Edge Delivery Services block!';
  
  // Create feature list
  const features = document.createElement('div');
  features.classList.add('hello-world-features');
  
  const featureList = [
    '🚀 Fast loading with Edge Delivery Services',
    '🎨 Customizable styling and content',
    '📱 Responsive design',
    '⚡ Built with modern web standards'
  ];
  
  featureList.forEach(feature => {
    const featureItem = document.createElement('div');
    featureItem.classList.add('hello-world-feature');
    featureItem.textContent = feature;
    features.appendChild(featureItem);
  });
  
  // Create action button
  const button = document.createElement('button');
  button.classList.add('hello-world-button');
  button.textContent = config.buttonText || 'Get Started';
  button.addEventListener('click', () => {
    alert('Hello from your custom block!');
  });
  
  // Create info section
  const info = document.createElement('div');
  info.classList.add('hello-world-info');
  info.innerHTML = `
    <small>
      This is a custom block created for Adobe Edge Delivery Services.<br>
      Block name: <strong>hello-world</strong><br>
      Created: ${new Date().toLocaleDateString()}
    </small>
  `;
  
  // Assemble the block
  container.appendChild(title);
  container.appendChild(subtitle);
  container.appendChild(features);
  container.appendChild(button);
  container.appendChild(info);
  
  block.appendChild(container);
  
  // Add some dynamic behavior
  setTimeout(() => {
    container.classList.add('hello-world-loaded');
  }, 100);
}