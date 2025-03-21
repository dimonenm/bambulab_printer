import { BambuClient, Fan, UpdateFanCommand } from "bambu-node"
async function main() {

const job = new Job()

	// define a printer connection
	const client = new BambuClient({
		host: "192.168.1.93",
		accessToken: "29126378",
		serialNumber: "03919D481902714",
	})

	// more about the available events below
	// client.on("message", (topic, key, data) => {
	// 	console.log(`New ${key} message!`, data)
	// })

	// client.on("printer:statusUpdate", (oldStatus, newStatus) => {
	// 	console.log(`The printer's status has changed from ${oldStatus} to ${newStatus}!`)
	// })

	// client.on("printer:dataUpdate", (data) => {
	// 	console.log(`printer:dataUpdate:`)
	// 	console.log(data)
	// })

	// connect to the printer
	await client.connect()
}
main()