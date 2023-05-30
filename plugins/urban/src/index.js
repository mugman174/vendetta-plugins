import UrbanDef from "./urban";
import { registerCommand } from "@vendetta/commands";
import { findByStoreName } from "@vendetta/metro";

export default {
	onLoad() {
		const command = {
			name: "urban",
			displayName: "urban",
			description: "Search urban dictionary",
			displayDescription: "Search urban dictionary",
			options: [
				{
					name: "word",
					displayName: "word",
					description: "The word you want the definition for",
					displayDescription: "The word you want the definition for",
					required: true,
					type: 3,
				},
				{
					name: "ephemeral",
					displayName: "ephemeral",
					description: "Make outputs only be seen by you (default: true)",
					displayDescription:
						"Make outputs only be seen by you (default: true)",
					type: 5,
					required: false,
				},
			],
			execute: UrbanDef,
			applicationId: "-1",
			inputType: 1,
			type: 1,
		};
		if (findByStoreName("ExperimentStore").getUserExperimentBucket("2023-03_improved_message_markdown") === 1) {
			command.options.splice(1, 0, {
				name: "inline_links",
				displayName: "inline_links",
				description: "Makes some of the words use the masked links feature (default: false)",
				displayDescription: "Makes some of the words use the masked links feature (default: false)",
				type: 5,
				required: false,
			});
		}
		this.onUnload = registerCommand(command);
	},
};
