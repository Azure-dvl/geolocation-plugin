package com.example.plugin;

import android.content.Context;
import androidx.core.content.ContextCompat;
import android.content.pm.PackageManager;

import android.location.Location;
import android.location.LocationManager;

import android.Manifest;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "Geolocation")
public class GeolocationPlugin extends Plugin {

    public LocationManager locationManager;

    @PluginMethod
    public void getCurrentPosition(PluginCall call) {
        Context context = getContext();
        locationManager = (LocationManager) context.getSystemService(Context.LOCATION_SERVICE);
        if(ContextCompat.checkSelfPermission(context, Manifest.permission.ACCESS_FINE_LOCATION)!= PackageManager.PERMISSION_GRANTED) {
            call.reject("Permission denied");
        }
        Location lastLocation = locationManager.getLastKnownLocation(LocationManager.GPS_PROVIDER);

        if (lastLocation != null) {
            JSObject ret = new JSObject();
            ret.put("latitude", lastLocation.getLatitude());
            ret.put("longitude", lastLocation.getLongitude());
            call.resolve(ret);
        } else {
            call.reject("Location not available");
        }
    }
}
