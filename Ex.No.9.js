// Simulated async generator that yields user objects
async function* getUserStream() {
  yield { email: "tesla@space.com" };
  yield { email: "amazon@stream.org" };
  yield { email: "flipkart@product.com" };
  yield { email: "devil@my-site.net" };
  // Uncomment to simulate error:
  // throw new Error("Something went wrong in the stream.");
}

// Main function to process stream
const processUserEmails = async () => {
  const domainSet = new Set();
  const emailRegex = /@(?<domain>[\w.-]+\.\w+)$/;

  try {
    for await (const user of getUserStream()) {
      const email = user.email;
      const match = email.match(emailRegex);
      if (match?.groups?.domain) {
        domainSet.add(match.groups.domain);
      }
    }

    console.log("Unique domains:", [...domainSet]);
  } catch (error) {
    console.error("Error while processing stream:", error.message);
  } finally {
    console.log("Stream completed");
  }
};

// Call the main function
processUserEmails();
