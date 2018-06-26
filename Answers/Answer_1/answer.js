const posts = [
    {
        id: '1',
        userId: '15',
        text: '...',
        images: [
            'http://via.placeholder.com/310x10',
            'http://via.placeholder.com/250x170',
        ]
    },
    {
        id: '2',
        userId: '65',
        text: '...',
        images: [
            'http://via.placeholder.com/330x35',
        ]
    },
    {
        id: '3',
        userId: '12',
        text: '...',
        images: [
            'http://via.placeholder.com/150x90',
            'http://via.placeholder.com/50x550',
            'http://via.placeholder.com/670x120'
        ]
    },
    {
        id: '4',
        userId: '15',
        text: '...',
        images: []
    },
];
// reduce each posts to just an array of images
const getAllImages = () => {
    return posts.reduce((accum, ele) => {
        ele.images.forEach(ele => {
            if (ele.length > 0) accum.push(ele)
        });
        return accum
    }, [])

}

module.exports = getAllImages