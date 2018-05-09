# CSS Project: Company Landing Page

This project works to summarize some of the skills and knowledge learned in the last few sections.  It incorporates CSS styles, animations, and use of flex-box styling to make a functional company web page.

## Assumptions

Rather than arbitrary widthbreak points, i have chosen to really change the style only when the page begins to break when resized.

## Response

I was able to make the webpage without going through the code-a-long, so for that I was pleased with my progression through these courses.  I did make a couple deviations from their solution.  The instructor put the nav in its own header section, then used rel/abs positioning on the sibling's background to move it up under the previous sibling.  I put the nav into the landing section instead, so it did not require the same styling.

I was able to get to put the image as the div's background for the use of the flexbox sizing, which allows for the image to scale much better to the dynamic sizing of the gallery frames.  I didnt know about the `background-crop: content-box;` which allows the use of padding to make the border of the picture rather than margin, which allowed me to remove the `calc()` from the `flex-basis` property, really simplifying things.