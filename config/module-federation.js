const deps = require("../package.json").dependencies;
const { ModuleFederationPlugin } = require("webpack").container;
const { NodeFederationPlugin, StreamingTargetPlugin } = require("@module-federation/node");

module.exports =  {
    client: new ModuleFederationPlugin({
        name: "widget",
        filename: "remoteEntry.js",
        remotes: {},
        exposes: {
            './Widget': './src/WidgetCounter'
        },
        shared: {
            ...deps,
            react: {
                singleton: true,
                requiredVersion: deps.react,
            },
            "react-dom": {
                singleton: true,
                requiredVersion: deps["react-dom"],
            },
        },
    }),
    server: [
        new NodeFederationPlugin({
            name: "widget",
            filename: "remoteEntry.js",
            library: { type: "commonjs-module" },
            remotes: {},
            exposes: {
                './Widget': './src/WidgetCounter'
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
            },
        }),
        new StreamingTargetPlugin({
            name: "widget",
            library: { type: "commonjs-module" },            
            remotes: {},

        }),
    ]
}