# Atoms

A super light-weight component library for React, featuring basic component blocks (atoms) with support for light/dark mode.

## Motivation

- **Simplicity and Lightweight**: Designed for proof-of-concept projects and demos.
- **Starter Point for Custom Systems**: Easily refactorable and extendable for more specific needs and design systems.
- **Component Purity**: Components are pure, stateless, and effect-less, providing only the skin and variants.
- **TypeScript Integration**: Types extend native HTML element interfaces with minimal adjustments and custom props.

## Inspiration

- **MUI**: Best experience but limited performance due to CSS-in-JS (Emotion).
- **Radix UI**: Great performance with CSS modules, but specific look & feel and less customizable.
- **Bootstrap**: Uses Sass mixins for consistency and maintainability, and a class names methodology inspired by modifier classes, but it is an overkill for simple projects and not originally designed for React.

## Technologies

- TypeScript
- SCSS
- [Material Design Icons](https://pictogrammers.com/library/mdi)

## Helper Classes (Responsive)

All components use helper classes for the following properties:

- **Margin**: `my`, `mx`, `mt`, `mb`, `ml`, `mr`
- **Padding**: `py`, `px`, `pt`, `pb`, `pl`, `pr`
- **Display**: `d-block`, `d-none`, `d-flex`
- **Flex Direction**: `dir-row`, `dir-col`
- **Flex Align**: `align-start`, `align-center`, `align-end`
- **Flex Justify**: `justify-start`, `justify-center`, `justify-end`, `justify-between`
- **Space**: `1` = 4px, `2` = 8px, `3` = 12px, `4` = 16px, `5` = 20px, `6` = 24px, `7` = 28px, `8` = 32px

And all helper classes can be suffixed with a responsive class:

- `my-sm-4`
- `py-sm-4`
- `d-sm-none`
- etc ...

## Breakpoints

All breakpoints are `min-width` based.

- **initial**: `0px`
- **xs**: `540px`
- **sm**: `768px`
- **md**: `1025px`
- **lg**: `1280px`

## Points for Further Improvement

- **Component Documentation**: Provide more detailed documentation for each component, including code and usage examples and customization options.
- **Unit Testing**: Add unit tests and [visual regression tests using Cypress](https://docs.cypress.io/guides/tooling/visual-testing).
- **Expand Library**: Add more components, for example Drop-down, Menu, File Upload.
