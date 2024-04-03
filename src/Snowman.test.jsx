import { it, expect } from "vitest";

import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";
// import TEST_IMAGES from "./_testCommon.js";

// it('renders without crashing', function () {
//   render(
//     <Snowman
//       photos={TEST_IMAGES}
//       title="images for testing"
//     />
//   );
// });


// it('matches snapshot', function () {
//   const { container } = render(
//     <Snowman
//       photos={TEST_IMAGES}
//       title="images for testing"
//     />
//   );

//   expect(container).toMatchSnapshot();
// });

it('no more than 6 wrong guesses', function () {
    const { container } = render(
        <Snowman
          maxWrong={2}
          images={[]}
          words={["apple"]}
        />
    );

    const button = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow)

    expect(container)
})