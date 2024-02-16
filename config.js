const config = {}
require('dotenv').config()

config.bot = {
    token: process.env.TOKEN,
    enabled: false,
    activitys: [
        {
            name: "GloryService",
            type: "Watching", // Playing, Listening, Watching
            status: "online" // online, idle, dnd, invisible
        },
        {
            name: "GloryService",
            type: "Watching",
            status: "afk"
        }
    ],
    intervall: 10000, // 10 Seconds
}

config.messages = {
    welcome: {
        channel: "1140405329578971238", // Channel ID
        dm: false, // If true the bot will send a DM to the User
        roles: ["ID1", "ID2"], // Roles User get when they join
        title: "Welcome", // Title of Embed
        description: "Hello {userping}, glad to see you here!\n\nMember No. {ammountmember}", // Description of Embed
        color: "#2d1f54", // Color of Embed
        image: "you banner", // Image of Embed
        banner: "you banner", // Banner of Embed
        author: {
            name: "GloryService", // Name of Author
            iconURL: "", // Icon of Author
            url: "https://discord.gg/GloryService", // URL of Author
        },
        footer: {
            text: "GloryService", // Text of Footer
            iconURL: "", // Icon of Footer
        },
        // fields: [
        //     {
        //         name: "Rules",
        //         value: "Please read the rules in <#1140405329578971239> and react to the message to get access to the server.",
        //         inline: true
        //     },
        //     {
        //         name: "Roles",
        //         value: "Get your roles in <#1140405332978601472>.",
        //         inline: true
        //     }
        // ],
        timestamp: true, // If true the Embed will have a Timestamp
    },
    goodbye: {
        channel: "1140405449900949635", // Channel ID
        title: "Goodbye", // Title of Embed
        description: "Goodbye {userping}, we hope you enjoyed your stay!\n\nMembers left: {ammountmember}", // Description of Embed
        color: "#2d1f54", // Color of Embed
        image: "you banner", // Image of Embed
        banner: "you banner", // Banner of Embed
        author: {
            name: "GloryService", // Name of Author
            iconURL: "you banner", // Icon of Author
            url: "https://discord.gg/GloryService", // URL of Author
        },
        footer: {
            text: "GloryService", // Text of Footer
            iconURL: "you banner", // Icon of Footer
        },
        // fields: [
        //     {
        //         name: "Rules",
        //         value: "Please read the rules in <#1140405329578971239> and react to the message to get access to the server.",
        //         inline: true
        //     },
        //     {
        //         name: "Roles",
        //         value: "Get your roles in <#1140405332978601472>.",
        //         inline: true
        //     }
        // ],
        timestamp: true, // If true the Embed will have a Timestamp
    },
    boost: {
        channel: "1140405448260989068", // Channel ID
        dm: false, // If true the bot will send a DM to the User
        reaction: {
            enabled: true, // If true the bot will react to the message
            emoji: "💜", // Emoji of Reaction
        },
        title: "Boost", // Title of Embed
        description: "Thank you {userping} for boosting our server!\n\nServer Boosts: {ammountboosts}", // Description of Embed
        color: "#2d1f54", // Color of Embed
        image: "", // Image of Embed
        banner: "", // Banner of Embed
        author: {
            name: "GloryService", // Name of Author
            iconURL: "you banner", // Icon of Author
            url: "https://discord.gg/GloryService", // URL of Author
        },
        footer: {
            text: "GloryService", // Text of Footer
            iconURL: "you banner", // Icon of Footer
        },
        // fields: [
        //     {
        //         name: "Rules",
        //         value: "Please read the rules in <#1140405329578971239> and react to the message to get access to the server.",
        //         inline: true
        //     },
        //     {
        //         name: "Roles",
        //         value: "Get your roles in <#1140405332978601472>.",
        //         inline: true
        //     }
        // ],
        timestamp: true, // If true the Embed will have a Timestamp
    }
}

module.exports = config
