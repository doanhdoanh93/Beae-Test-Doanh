import { avatars } from "./data";

const  elements= [
    {
        id: 'heading',
        label: 'Heading',
        desc: 'Create a blocked text',
        icon: 'AcademicCapIcon',
        settings: {
            content: 'Enter your heading text',
            tag: 'p'
        },
        styles: {
            frontStyle: 'normal',
            color: 'black',
            align: 'left',
        },
        component: 'elementHeading',
        component_setting: 'settingHeading'
    },
    {
        id: 'feature',
        label: 'Featured',
        desc: 'Create a featured',
        icon: 'BadgeCheckIcon',
        settings: {
            position: 'flex',
            image: 'https://cdn.pixabay.com/photo/2017/09/23/04/02/dice-2777809_960_720.jpg',
            title: 'The heading 1',
            content:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorum odit odio nobis amet! ',
            btnText: 'Read more',
            link: null
        },
        styles: {
            align: 'center',
            background: 'white',
            boxShadow: null,
            border: 'none',
            spacing: null,
            padding: 10
        },
        component: 'elementFeatured',
        component_setting: 'settingFeatured'
    },
    {
        id: 'testimonial',
        label: 'Testimonial',
        desc: 'Create a testimonial',
        icon: 'AnnotationIcon',
        settings: {
            fields: ["avatar", "title", "position", "content"],
          },
          items: CardItems(),
          styles: {
            frontStyle: 'normal',
            color: "black",
            property: null,
            align: "left",
            bgColor: "#ffffff",
          },
        component: 'elementTestimonial',
        component_setting: 'settingTestimonial'
    },
    {
        id: 'collections',
        label: 'Collections',
        icon: 'ViewBoardsIcon'
    },
    {
        id: 'product',
        label: 'Product',
        icon: 'ViewGridAddIcon'
    }
]
function CardItems() {
    return [
      {
        id: 1,
        component_setting: "SimpleTextSetting",
        avatar: avatars[1],
        title: "John Doe 1",
        position: "CEO",
        child_styles: {},
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        id: 2,
        component_setting: "SimpleTextSetting",
        avatar: avatars[2],
        title: "John Doe 2",
        position: "CEO",
        child_styles: {},
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
      {
        id: 3,
        component_setting: "SimpleTextSetting",
        avatar: null,
        title: "John Doe 3",
        position: "CEO",
        child_styles: {},
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
    ];
  }

  export default elements;