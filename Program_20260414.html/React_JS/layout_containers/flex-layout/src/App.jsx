import Cards from "./components/Cards";
import FlexBox from "./components/containers/FlexBox";
import PhotoAlbum from "./components/PhotoAlbum";
import ContactForm from "./components/ContactForm";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  const photos = [
    {
      id: 1,
      title: "Photo 1",
      url: "https://picsum.photos/id/1015/600/600/",
      // if the image is in the assets
      // import photo_name from "path_to_photo.jpg"
      // url: phot_name
    },
    {
      id: 2,
      title: "Photo 2",
      url: "https://picsum.photos/id/1016/600/600/",
    },
    {
      id: 3,
      title: "Photo 3",
      url: "https://picsum.photos/id/1019/600/600",
    },
    {
      id: 4,
      title: "Photo 4",
      url: "https://picsum.photos/id/1018/600/600",
    },
    {
      id: 5,
      title: "Photo 5",
      url: "https://picsum.photos/id/1020/600/600/",
    },
    {
      id: 6,
      title: "Photo 6",
      url: "https://picsum.photos/id/1028/600/600",
    },
    {
      id: 7,
      title: "Photo 7",
      url: "https://picsum.photos/id/1040/600/600",
    },
    {
      id: 8,
      title: "Photo 8",
      url: "https://picsum.photos/seed/picsum/200/300",
    },

    {
      id: 2,
      title: "Photo 2",
      url: "https://picsum.photos/id/1016/600/600/",
    },
    {
      id: 3,
      title: "Photo 3",
      url: "https://picsum.photos/id/1019/600/600",
    },
    {
      id: 4,
      title: "Photo 4",
      url: "https://picsum.photos/id/1018/600/600",
    },
    {
      id: 5,
      title: "Photo 5",
      url: "https://picsum.photos/id/1020/600/600/",
    },
    {
      id: 6,
      title: "Photo 6",
      url: "https://picsum.photos/id/1028/600/600",
    },
    {
      id: 7,
      title: "Photo 7",
      url: "https://picsum.photos/id/1040/600/600",
    },
    {
      id: 8,
      title: "Photo 8",
      url: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 2,
      title: "Photo 2",
      url: "https://picsum.photos/id/1016/600/600/",
    },
    {
      id: 3,
      title: "Photo 3",
      url: "https://picsum.photos/id/1019/600/600",
    },
    {
      id: 4,
      title: "Photo 4",
      url: "https://picsum.photos/id/1018/600/600",
    },
    {
      id: 5,
      title: "Photo 5",
      url: "https://picsum.photos/id/1020/600/600/",
    },
    {
      id: 6,
      title: "Photo 6",
      url: "https://picsum.photos/id/1028/600/600",
    },
    {
      id: 7,
      title: "Photo 7",
      url: "https://picsum.photos/id/1040/600/600",
    },
    {
      id: 8,
      title: "Photo 8",
      url: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 7,
      title: "Photo 7",
      url: "https://picsum.photos/id/1040/600/600",
    },
    {
      id: 8,
      title: "Photo 8",
      url: "https://picsum.photos/seed/picsum/200/300",
    },
  ];
  return (
    <>
      {/* content in the menu */}
      {/* <FlexBox
        direction="row"
        justify="space-between"
        align="center"
        gap="30px"
        padding="5px"
        background="black"
        width="100%"
      > */}
      {/* <Menu /> */}
      {/* logo on the right
        <FlexBox
          justify="flex-end"
          wrap="nowrap"
          padding="2px"
          background="lightblue"
        >
          <h1> Flex 2: logo</h1>
        </FlexBox> */}
      {/* </FlexBox> */}

      {/* card display
      <FlexBox
        direction="column"
        justify="flex-start"
        align="center"
        wrap="nowrap"
        border="2px solid red"
        gap="10px"
        padding="50px"
        background="white"
        height="63vh"
        width="auto"
        borderRadius="1px"
        // margin="10px"
        // textalign="right"
        // width="500px"
      // >
      //   <Cards />
      //   <Cards />
      //   <Cards />
      //   <Cards />
    //   </FlexBox> */}

      {/*   footer dashboard
    //   <FlexBox
    //     direction="row"
    //     justify="flex-start"
    //     align="left"
    //     wrap="nowrap"
    //     border="2px solid red"
    //     gap="10px"
    //     padding="50px"
    //     background="black"
    //     width="auto"
    //     color="black"
    //  >
    //     <Menu />
    // </FlexBox> */}

      {/* <FlexBox
        direction="row"
        height="auto"
        background="white"
        justify="center"
        align="center"
        padding="20px"
        gap="20px"
        wrap="wrap"
      >
        <div style={{ padding: "30px" }}>
          <h1> Photo Album</h1>
          <PhotoAlbum photos={photos} />
        </div>
      </FlexBox> */}

      {/* Contact Form Demo */}
      {/* <FlexBox
        direction="column"
        height="90vh"
        width="75%"
        justify="center"
        align="center"
        background="#EDEFF0"
        margin="0 auto"
      >
        <ContactForm />
      </FlexBox> */}

      {/* Router implemented with all pages */}
      <FlexBox direction="column" height="90vh">
        <NavBar />
        <FlexBox grow={0} padding="25px" justify="center" align="center">
          <Routes>
            <Route path="/" element={<ContactForm />} />
            <Route path="/gallery" element={<PhotoAlbum photos={photos} />} />
            <Route path="/Cards" element={<Cards.jsx />} />
          </Routes>
        </FlexBox>
      </FlexBox>
    </>
    //   );
    // }
  );
}

export default App;
