import { get, child, getDatabase, ref } from "firebase/database";
import { UID as UserID } from "../configs/environment.js";
import { flattenObj } from "../utils/flattenObj.js";
import { ElectricalMonitoringService } from "../services/electricalMonitoringService.js";
import { app } from "../configs/backend.js";

export const db = getDatabase(app);
export const dbRef = ref(db);

export const electricalMonitoringData = async () => {
	try {
		const snapshot = await get(child(dbRef, "UsersData/" + UserID));
		if (snapshot.exists()) {
			return snapshot.val();
		}
		return "No data available";
	} catch (err) {
		return err.message;
	}
};

export const electricData = await electricalMonitoringData();
export const electricDataFlatten = flattenObj(electricData, "array");
export const electricDataQueryObj = new ElectricalMonitoringService(electricDataFlatten);
