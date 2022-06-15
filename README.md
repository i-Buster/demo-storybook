# Storybook

## What is Storybook

- Storybook is a UI development environment tool that is used as a **playground** for the development of UI components interactively.

- It enables you create components in **isolation** from your app's business logic, data, and context in an environment outside your main application. This makes it possible to **showcase the project/components to your client** without touching code or requiring a local dev environment.

- You can develop different **stories** for each component which represents unique states for these components. Save these UI states as stories to revisit during development, testing, or QA.

- The stories are written in Component Story Format (CSF)--an ES6 modules-based standard--for writing component examples.

<br>

## Features of Storybook

**Helps with UI Development:** Storybook helps build UI in isolation so that you can create designs without having to worry about data/APIs/business logic.

**Documentation:** Storybook brings together UI, examples, and documentation in one place. This helps in the maintainence of the project.

**Helps with testing:** Storybook makings testing easy by providing Interactive tests, Snapshot test markup, Unit test functionality, Accessibility test etc.

**Addons**: Use addons to customize your workflow, automate testing, and integrate with your favorite tools. Visit the [Addons page](https://storybook.js.org/addons) to learn more about addons.

<br>

## Installation

You can use the Storybook CLI to initialize storybook in your app. Run this inside your *existing project’s* root directory:

Simplest way to add Storybook to your project:
```
npx storybook init
```
Storybook automatically detects that we're using an app created using Preact and installs the required dependencies.

<br>

## Running and Building with Storybook

``` bash
# start your project in a development environment
npm run dev

# start storybook on development environment.
npm run storybook
# It will use the default Webpack setup if available.
# This will open the Storybook dashboard by default on http://localhost:6006/ as defined in storybook script

# It is possible to publish storybook online.
# This allows developers, designers, and other stakeholders to check if the UI looks right without touching code or requiring a local dev environment.
npm run build-storybook

# Storybook will create a static web application capable of being served by any web server. Preview it locally by running the following command:
npx http-server ./path/to/build

# You can then publish it to your web host.
```

<br>

## Working with Storybook

- After you run storybook in development mode, you can open it on http://localhost:6006/ as defined in storybook script.

    This will open the Storybook dashboard.

- To **create a story**, create a new file in the designated folder with the name - ${componentName}.stories.jsx/tsx 

- Components will be shown on the left sidebar with all possible states(Stories!) defined under them. While the working area is shown on the right under **canvas**.

- You can **search** the component list using the search box in the left sidenav.

- You can use the **3 dot menu** in the sidenav to see the keybinds and hide/show different parts of the dashboard.

- Storybook also helps with the documentation of components. It has a **docs tab** beside canvas which shows the possible states and props for the story along with the description, default values, controls etc.

- You can also enable **measure** using the button at the top which enables inspect to show the dimensions of the selected component.

- On selecting a component/story, we can see how it will be rendered in the canvas. It is possible to play around with the options such as color, label, etc using the **Control tab** at the bottom.

- The **Action tab** shows the event that are captured from interacting with the component. Like for example, an onClick action defined for the button component will be show in the Action tab after clicking the button.

- The **Interactions** tab shows the Interactions defined. It is a Storybook Addon that enables visual debugging of interactions and tests in Storybook.
Check out this [Readme](https://github.com/storybookjs/storybook/blob/next/addons/interactions/README.md) for detailed explanation.

<br>

## Configuration

- Storybook is configured via a folder named **.storybook**, which contains various configuration files.

- It is possible to change the folder that Storybook uses by setting the -c flag to your start-storybook and build-storybook scripts.

- The main configuration file for Storybook is **main.js**. For example, you can disable telemetry by changing the disableTelemetry flag to true in core.

- You can define where storybook looks for story files in this main.js configuration.

<br>

## Examples

Defining your component in Storybook
```js
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/preact/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
    label: {
      name: 'label',
      type: { name: 'string', required: false },
      defaultValue: 'Click me!',
      description: 'The text for the button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Click me!' },
      },
      control: {
        type: 'text'
      }
    }
  },
};
```

To create different stories for that component
```js
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/preact/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Primary Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
```


Using the defined stories/states in your application.
```js

<Button primary={true} label={'Primary Button'} size={'large'} />
<Button label={'Small Button'} size={'small'} />

```

<br>

## Conclusion

For detailed explanation on how things work, checkout the [Storybook Readme](https://storybook.js.org/docs/preact/get-started/introduction).

Storybooks provides setup and documentation for many frameworks. So if you want information **specific to Preact**, you can select Preact from the left side-nav in the Storybook documentation.