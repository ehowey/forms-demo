const sanityClient = require("@sanity/client")
const client = sanityClient({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_PROJECT_DATASET,
  token: process.env.GATSBY_SANITY_TOKEN,
  useCDN: false,
})

exports.handler = async function (event, context, callback) {
  // Pulling out the payload from the body
  const { payload } = JSON.parse(event.body)

  const isContactForm = payload.data.formId === "contact-form"

  console.log(payload)

  // ///////// REQUEST CHANGES ////////
  // if (isContactForm) {
  //   const contact = {
  //     _type: "contact",
  //     name: payload.data.name,
  //     email: payload.data.email,
  //     message: payload.data.message,
  //   }

  //   const result = await client.create(contact).catch((err) => console.log(err))
  // }

  callback(null, {
    statusCode: 200,
  })
}
