import FlexBox from "./containers/FlexBox";

const PhotoAlbum = ({ photos = [] }) => {
  return (
    <FlexBox
      direction="row"
      wrap="wrap"
      gap="16px"
      justify="flex-start"
      align="flex-start"
      width="100%"
    >
      {photos.map((photo) => (
        <FlexBox
          key={photo.id}
          direction="column"
          basis="200px"
          grow={1}
          style={{
            overflow: "hidden",
            cursor: "pointer",
            minHeight: "200px",
          }}
        >
          <img
            src={photo.url}
            alt={photo.title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />

          {photo.title && (
            <div style={{ marginTop: "10px", fontSize: "14px" }}>
              {photo.title}
            </div>
          )}
        </FlexBox>
      ))}
    </FlexBox>
  );
};

export default PhotoAlbum;
