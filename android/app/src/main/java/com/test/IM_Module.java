package com.test;

import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.tencent.imsdk.v2.V2TIMCallback;
import com.tencent.imsdk.v2.V2TIMManager;
import com.tencent.imsdk.v2.V2TIMSDKConfig;
import com.tencent.imsdk.v2.V2TIMSDKListener;
import com.tencentyun.TLSSigAPIv2;


public class IM_Module extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    private V2TIMSDKConfig config = new V2TIMSDKConfig();

    public IM_Module(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "IM_Module";
    }

    @ReactMethod
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

    @ReactMethod
    public int connectToServer(int sdkAppID){
        final int[] status = {0};
        config.setLogLevel(V2TIMSDKConfig.V2TIM_LOG_INFO);
        V2TIMManager.getInstance().initSDK(reactContext, sdkAppID, config, new V2TIMSDKListener() {
                    @Override
                    public void onConnecting () {
                        show("正在连接到腾讯云服务器", 10);
                        status[0] = 0;
                    }
                    @Override
                    public void onConnectSuccess () {
                        show("已经成功连接到腾讯云服务器", 10);
                        status[0] = 1;
                    }
                    @Override
                    public void onConnectFailed ( int code, String error){
                        show("连接腾讯云服务器失败", 10);
                        status[0] = 2;
                    }
        });
        return status[0];

    }

    @ReactMethod
    public int login(String userID, int sdkAppID){
        final int[] status = {0};
        TLSSigAPIv2 api = new TLSSigAPIv2(sdkAppID, "1f704cf4b61811690b4c985a00561add0ff05f3aa059f263433ef0444d654209");
        V2TIMManager.getInstance().login(userID, api.genUserSig(userID, 1000000), new V2TIMCallback() {
            @Override
            public void onSuccess() {
                show("登录成功", 10);
                status[0] = 0;
            }

            @Override
            public void onError(int i, String s) {
                show("登录失败", 10);
                status[0] = 1;
            }
        });
        return status[0];
    }

    @ReactMethod
    public int login(int userID, int sdkAppID){
        final int[] status = {0};
        TLSSigAPIv2 api = new TLSSigAPIv2(sdkAppID, "1f704cf4b61811690b4c985a00561add0ff05f3aa059f263433ef0444d654209");
        V2TIMManager.getInstance().login(Integer.toString(userID), api.genUserSig(Integer.toString(userID), 1000000), new V2TIMCallback() {
            @Override
            public void onSuccess() {
                show("登录成功", 10);
                status[0] = 0;
            }

            @Override
            public void onError(int i, String s) {
                show("登录失败", 10);
                status[0] = 1;
            }
        });
        return status[0];
    }

}
