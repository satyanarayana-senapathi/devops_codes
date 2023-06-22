import { ImageAvatar } from '.';
import { ComponentMeta, ComponentStory }  from '@storybook/react';
export default {
    title: 'atoms/Avatar', 
    component: ImageAvatar,
} as ComponentMeta<typeof ImageAvatar>

const Template :ComponentStory<typeof ImageAvatar> = args => <ImageAvatar {...args}></ImageAvatar>

export const Profile = Template.bind({})
Profile.args= {
    Width: '40px',
    Height: '40px',
    alt: "girl Image",
    src:"https://randomuser.me/api/portraits/women/79.jpg",
}