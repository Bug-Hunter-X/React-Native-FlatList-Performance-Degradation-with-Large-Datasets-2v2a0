# React Native FlatList Performance Issue

This repository demonstrates a common performance issue encountered when using `FlatList` in React Native with large datasets and complex item renderers. The initial implementation exhibits UI freezes and dropped frames due to inefficient rendering.  The solution demonstrates best practices to resolve this, optimizing rendering and key extraction for improved performance.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run the app on an emulator or physical device.
4. Observe the performance with a large dataset (e.g., 1000 items).

## Solution

The solution implements the following improvements:

- Efficient `keyExtractor` function.
- Optimized item rendering to minimize expensive operations within the render method. 
- Use of `getItemLayout` for better performance. 
- Consider using React.memo to prevent unnecessary renders of components. 