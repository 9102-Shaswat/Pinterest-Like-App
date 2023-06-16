const path =require('path')

module.exports={
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    target:'node',
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
            }
        ]
    },
    devtool:'source-map',
    plugins:[
        new  NodemonPlugin()
    ]
}