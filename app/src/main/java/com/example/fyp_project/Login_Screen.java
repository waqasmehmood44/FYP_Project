package com.example.fyp_project;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Toast;

import com.example.fyp_project.databinding.ActivityLoginScreenBinding;
import com.example.fyp_project.databinding.ActivityMainBinding;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

public class Login_Screen extends AppCompatActivity {
    ActivityLoginScreenBinding bind;
    FirebaseAuth fAuth;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login_screen);
        bind= ActivityLoginScreenBinding.inflate(getLayoutInflater());
        View view=bind.getRoot();
        setContentView(view);
        fAuth=FirebaseAuth.getInstance();
        bind.loginBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String email=bind.emilLogin.getText().toString().trim();
                String password=bind.passLogin.getText().toString().trim();
                if(TextUtils.isEmpty(email)){
                    bind.emilLogin.setError("Email is Required");
                    return;
                }
                if(TextUtils.isEmpty(password)){
                    bind.passLogin.setError("Password is Empty");
                    return;
                }
                if(password.length()<6){
                    bind.passLogin.setError("Password must be greater then 6 characters");
                    return;
                }
                bind.progressBar1.setVisibility(View.VISIBLE);
                fAuth.signInWithEmailAndPassword(email,password).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                   if(task.isSuccessful()){
                       Toast.makeText(Login_Screen.this, "Login Successful", Toast.LENGTH_SHORT).show();
                       Intent intent=new Intent(Login_Screen.this,verification_screen.class);
                       startActivity(intent);
                   }else{
                       Toast.makeText(Login_Screen.this, "Error!" +task.getException().getMessage(), Toast.LENGTH_SHORT).show();
                   }
                    }
                });
            }
        });
        bind.register.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent=new Intent(Login_Screen.this,Login_Screen.class);
                startActivity(intent);
            }
        });

    }
}