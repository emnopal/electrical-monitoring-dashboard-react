import React, { useEffect, useState } from "react";
import dbRef from "../config/firebaseConfig";
import { onValue } from "firebase/database";

const FirebaseDataWrapper = () => {
	const [firebaseData, setFirebaseData] = useState([]);

	useEffect(() => {
		return onValue(dbRef, (snapshot) => {
			const data = snapshot.val();

			if (snapshot.exists()) {
				Object.values(data).map((firebaseData) =>
                    setFirebaseData((firebaseDatas) => [...firebaseDatas, firebaseData])
				);
				console.log(data);
			}
		});
	}, []);

    return (
		<div>
			{firebaseData}
			{setFirebaseData}
		</div>
	)
};

export default FirebaseDataWrapper;