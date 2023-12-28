import { title } from "process";

export default {
    name: 'project',
    type: 'document',
    title: 'Project',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'overview',
            type: 'string',
            title: 'Small Overview',

        },
        {
            name: "image",
            type: "image",
            title: "Image"
        },
        {
            name: "livelink",
            type: "string",
            title: "livelink"
        },
        {
            name: "githublink",
            type: "string",
            title: "githublink"
        }, {
            name: "tags",
            type: "string",
            title: "Select Tag",
            options: {
                list: [
                    { title: 'All', value: 'all' },
                    { title: 'Web', value: 'web' },
                    { title: 'Mobile', value: 'mobile' },
                ],
            }

        }

    ]
};
