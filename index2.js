import { BambuClient, GCodeFileCommand, Job, UpdateLightCommand } from "bambu-node"
async function main() {

	const gcodeFileName = 'Kisa A1 USilk PLA 49g 3h44m.gcode'
	var catCommand = new GCodeFileCommand({ gcodeFileName })

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
	// var res = await client.executeCommand(catCommand)
	// console.log('res: ', res);
	// await client.disconnect()

	// client.on("message", (topic, key, data) => {
	// 	console.log('message: ')
	// 	console.log('topic: ', topic)
	// 	console.log('key: ', key)
	// 	console.log('data: ', data)
	// })
	client.on('job:start', (job) => {
		console.log('job:start')
		console.log('job: ', job)
	})
	client.on('job:update', (job, updatePackage) => {
		console.log('job:update')
		console.log('job: ', job)
		console.log('updatePackage: ', updatePackage)
	})
	// client.on('printer:dataUpdate', (data) => {
	// 	console.log('job:dataUpdate')
	// 	console.log('data: ', data)

	// })
	client.on('printer:statusUpdate', (oldStatus, newStatus) => {
		console.log('job:statusUpdate')
		console.log('oldStatus: ', oldStatus)
		console.log('newStatus: ', newStatus)
	})

	// console.log('UpdateLightCommand: ', await client.executeCommand(
	// 	new UpdateLightCommand(
	// 		{ light: "chamber_light", mode: "on" }
	// 	)))
	console.log('GCodeFileCommand: ', await client.executeCommand(
		new GCodeFileCommand('models/Kisa A1 USilk PLA 49g 3h44m.gcode')))

}
main()