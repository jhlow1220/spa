
export function updateUserLocation1() {
    navigator.geolocation.watchPosition(function(position) {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;

        const targets = [
            { id: 'target1', latitude: 24.14977351688243, longitude: 120.68377231768088, button: 'showButton1' },
            { id: 'target2', latitude: 24.151025939583285, longitude: 120.68141029301923, button: 'showButton2' },
            // Add other target locations...
        ];

        targets.forEach(function(target) {
            const distance = calculateDistance(userLat, userLng, target.latitude, target.longitude);
            console.log(distance);

            if (distance <= 50) {
                showTarget(target.id);
            } else {
                hideTarget(target.id);
            }

            if (distance <= 25) {
                showButton(target.button);
            } else {
                hideButton(target.button);
            }
        });
    });
}
export function calculateDistance(userLat, userLon, targetLat, targetLon) {
    const R = 6371e3; // meters
    const φ1 = userLat * Math.PI / 180;
    const φ2 = targetLat * Math.PI / 180;
    const Δφ = (targetLat - userLat) * Math.PI / 180;
    const Δλ = (targetLon - userLon) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c;
    return d;
}

// 显示目标
export function showTarget(targetId) {
    const targetEntity = document.getElementById(targetId);
    if (targetEntity) {
        targetEntity.setAttribute('visible', true);
    }
}

// 隐藏目标
export function hideTarget(targetId) {
    const targetEntity = document.getElementById(targetId);
    if (targetEntity) {
        targetEntity.setAttribute('visible', false);
    }
}

// 显示按钮
export function showButton(buttonId) {
    const buttonEntity = document.getElementById(buttonId);
    if (buttonEntity) {
        buttonEntity.setAttribute('visible', true);
    }
}

// 隐藏按钮
export function hideButton(buttonId) {
    const buttonEntity = document.getElementById(buttonId);
    if (buttonEntity) {
        buttonEntity.setAttribute('visible', false);
    }
}
