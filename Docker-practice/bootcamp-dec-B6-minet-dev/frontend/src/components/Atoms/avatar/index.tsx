import {Avatar, Stack} from '@mui/material';
interface Props {
  Width?: string
  Height?: string
  alt: string
  src:string
}

export const ImageAvatar = (props:Props) => {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        alt={props.alt}
        src={props.src}
        sx={{
          width: props.Width,
          height:props.Height,
        }}
      />
    </Stack>
  );
}