import { BambuPrinter } from "bambu-js"

async function main() {
	const host = "192.168.1.93"
	const serial = "03919D481902714"
	// const serial = "03919d481902714"
	// const serial = "3DP-039-714"
	const accessCode = "29126378"
	// Create the printer
	const printer = new BambuPrinter(host, serial, accessCode)

	// Connect to the printer
	await printer.connect();

	// Log the printer state
	// console.log(printer.getState())
	console.log(printer.isConnected)
	console.log(printer.getState())
	console.log(printer.getRawState())
}
main()