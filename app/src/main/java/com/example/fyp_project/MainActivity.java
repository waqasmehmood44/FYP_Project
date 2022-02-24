package com.example.fyp_project;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.example.fyp_project.databinding.ActivityMainBinding;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class MainActivity extends AppCompatActivity {
    ActivityMainBinding activityMainBinding;
    FirebaseAuth fauth;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        activityMainBinding=ActivityMainBinding.inflate(getLayoutInflater());
        View view=activityMainBinding.getRoot();
        setContentView(view);
        fauth=FirebaseAuth.getInstance();

        // To get current Login user data and Transfer to App Home Screen

//        if(fauth.getCurrentUser()!=null){
//            startActivity(new Intent(getApplicationContext(),verification_screen.class));
//            finish();
//
//        }

        activityMainBinding.continueButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String email=activityMainBinding.email.getText().toString().trim();
                String password=activityMainBinding.password.getText().toString().trim();
                if(TextUtils.isEmpty(email)){
                    activityMainBinding.email.setError("Email is Required");
                    return;
                }
                if(TextUtils.isEmpty(password)){
                    activityMainBinding.password.setError("Password is Empty");
                    return;
                }
                if(password.length()<6){
                    activityMainBinding.password.setError("Password must be greater then 6 characters");
                    return;
                }
                activityMainBinding.progressBar.setVisibility(View.VISIBLE);
                fauth.createUserWithEmailAndPassword(email,password).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if(task.isSuccessful()){
                            Toast.makeText(MainActivity.this, "Registration Successful", Toast.LENGTH_SHORT).show();
                            startActivity(new Intent(getApplicationContext(),verification_screen.class));
                        }else {
                            Toast.makeText(MainActivity.this, "Error!" +task.getException().getMessage(), Toast.LENGTH_SHORT).show();

                        }
                    }
                });
            }
        });
        activityMainBinding.loginText.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent=new Intent(MainActivity.this, Login_Screen.class);
                startActivity(intent);
            }
        });
        
    }
}