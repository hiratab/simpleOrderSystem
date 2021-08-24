const { Client } = require('@notionhq/client')

const notion = new Client({ auth: process.env.NOTION_KEY })
const databaseId = process.env.NOTION_DATABASE_ID

const addItem = async (reportData) => {
    try {
        const response = await notion.pages.create({
            parent: { database_id: databaseId},
            properties: {
                Product_Id: {
                    id: "Product_Id_ID",
                    type: "title",
                    title: [{
                        type: "text",
                        text: {
                            content: `${reportData.Product_Id}`
                        }
                    }]
                }, 
                Product_Name: {
                    type: 'rich_text',
                    rich_text: [{
                        type: 'text',
                        text: {
                            content: `${reportData.Product_Name}`
                        }
                    }]
                },
                Sold_count: {
                    type: 'rich_text',
                    rich_text: [{
                        type: 'text',
                        text: {
                            content: `${reportData.Sold_count}`
                        }
                    }]
                },
            }
        })
        console.log(response)
        console.log("Success! Entry Added.")
    } catch (error) {
        console.error(error.body)
    }
}

module.exports = {
    addItem
}



/*
async function addItem(text) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: { 
          title:[
            {
              "text": {
                "content": text
              }
            }
          ]
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

addItem("Yurts in Big Sur, California")

*/