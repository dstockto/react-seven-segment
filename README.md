# React App Seven Segment Display Toy   

This is a toy app to explore CSS grid, react and creating adapters to show
the relationship between generic flexible constructs and more specific but
less flexible APIs.

There are 3 main components in this project:

* SevenSegment - This is the component that actually displays a seven-segment
    display on the screen. For anyone not aware, a seven-segment display is the
    digital numeric display often found in alarm clocks, calculators and digital
    watches. There are seven lines that can be illuminated in various ways to
    display the numbers 0-9. There's also a "dot" that can be used to display 
    decimal numbers as well. It also accepts an array of colors and a className. 
    The colors and className can be used to change how the display looks. The Colors
    object provides some examples for red and green and "off".
    
* SevenSegmentAdapter - This component receives usually a character representing a number. 
    This adapter takes the input and converts to the inputs that the SevenSegment 
    component needs in order to light up the right segments. The input prop is called
    "number". It is a string, representing a digit or a digit with a trailing decimal.
    Certain other characters could be encoded. You can modify this adapter to allow for
    additional characters to be rendered. This adapter is responsible for creating
    a SevenSegment with the right inputs to show the provided character. If the input
    character is not recognized, it will display a SevenSegment that looks "off". This
    is different than providing a space (" ") character which will result in a 
    SevenSegment where nothing is lit.
    
* InputToSevenSegments - This component receives a string (also called number). It is
    responsible for converting a long string into an array of SevenSegmentAdapter 
    components which are in turn used to render SevenSegment components. It also accepts
    props for `colors` and `className` that will be passed down into the SevenSegment 
    component.
    
The idea behind this software toy is to play with the components above while working to 
understand the trade-offs between being generic and extremely flexible and being 
specific which implies fewer use-cases but that it is easier to use.

The provided application starts with a simple counter that automatically updates.
If you remove or disable the useInterval call (custom hook) then you'll be able to
click the provided button to increment the counter. But that's just the start. You 
should see what else you can do.

Some ideas:

* Change the colors used to render. Red is already provided, but you can add more.
* Build a different display - make a sports scoreboard, for instance
* Update the SevenSegmentAdapter so other characters can be displayed
* Build an adapter that will "animate" to the provided values - for instance cycling through the characters until the right ones are reached
* Build an adapter that will cycle colors of the display
* Figure out how you would design an RGB or color-capable SevenSegment. How would it complicate
    the API for SevenSegment?
* Implement a full alphabet in the SevenSegmentAdapter - https://en.wikichip.org/wiki/seven-segment_display/representing_letters - What other concerns would 
    your SevenSegmentAdapter have?
* Update the CSS so the display is more realistic. 
* Take a look at Alphanumeric Displays. How could you represent them using Grid and CSS? https://www.adafruit.com/product/1911
* Implement a SevenSegment using SVG - make the shapes of the lines resemble a real Seven
    Segment Display.
* Update the grid to support a "colon" display of two dots in the center of the top and 
    bottom squares. 
* Anything else you can think of. Did you come up with something great? I want to see! 
* Found a bug or a way to make this work better or more efficiently? PRs are welcome.
 