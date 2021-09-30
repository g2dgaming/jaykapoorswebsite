<?php

namespace App\Http\Controllers;
use App\Models\subscriptions;
use Illuminate\Http\Request;

class SubscriptionsController extends Controller
{
    public function subscribe(Request $request)
    {
        $email=$request['email'];
        $subscription=new subscriptions;
        $response=[];
        if(!subscriptions::where('email',$email)->exists())
        {
            $subscription->email=$email;
            $response=[
                'success'=>$subscription->save(),
                'message'=>'Subscription added!'
            ];
        }else{
            $response=[
                'success'=>false,
                'message'=>"You've already subscribed to our newsletter"
            ];           
        }
        return response()->json($response);       
    }
}
