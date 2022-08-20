
const avatars = [
    "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    "https://cdn-icons-png.flaticon.com/512/747/747545.png",
    "https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg",
    "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  ]
  const images=[
    'https://cdn.pixabay.com/photo/2017/09/23/04/02/dice-2777809_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_960_720.jpg',
    'https://cdn.pixabay.com/photo/2014/10/14/20/24/soccer-488700_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/03/27/20/57/people-1284253_960_720.jpg'
]
const alignments= [
    { id: 'left', label: 'Left' },
    { id: 'right', label: 'Right' },
    { id: 'center', label: 'Center' },
    { id: 'justify', label: 'Justify' }
]
const floats = [
    { id: 'left', label: 'Left' },
    { id: 'right', label: 'Right' },
]
const positions= [
    { id: '1', label: 'flex' },
    { id: '2', label: 'block' }
]
const borderRadius= ['3px', '4px', '5px', '10px', '12px', '15px', '20px', '25px', '30px', '50%']
const titleTag=[
    { tag: 'H1' },
    { tag: 'H2' },
    { tag: 'H3' },
    { tag: 'H4' },
    { tag: 'H5' },
    { tag: 'H6' },
    { tag: 'Strong' },
    { tag: 'Span' }
]
const clone = (item) => JSON.parse(JSON.stringify(item));
const uuid = () => (Math.random() + 1).toString(36).substring(7);
export { avatars,images, alignments,positions,borderRadius ,titleTag, clone, floats};