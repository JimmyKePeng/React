import WhatToShowProvider from "../contexts/WhatToShowContext";
import WhatToShow from "../components/WhatToShow";
import { BackgroundColorProvider } from "../contexts/BackgroundColor";
function Projects() {
  return (
    <BackgroundColorProvider>
      <WhatToShowProvider>
        <WhatToShow />
      </WhatToShowProvider>
    </BackgroundColorProvider>
  );
}
export default Projects;
