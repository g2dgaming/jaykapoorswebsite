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
    public function download(Request $request)
    {
        $key=($request->all())['key'];
        if($key == config('app.DOWNLOAD_PASS_KEY'))
        {
            $fileName = 'emails.csv';
            $subscriptions=subscriptions::all();
            $headers = array(
                "Content-type"        => "text/csv",
                "Content-Disposition" => "attachment; filename=$fileName",
                "Pragma"              => "no-cache",
                "Cache-Control"       => "must-revalidate, post-check=0, pre-check=0",
                "Expires"             => "0"
            );

            $columns = array('email');

            $callback = function() use($subscriptions, $columns) {
                $file = fopen('php://output', 'w');
                fputcsv($file, $columns);

                foreach ($subscriptions as $subscription) {
                    $row['email']  = $subscription->email;

                    fputcsv($file, array($row['email']));
                }

                fclose($file);
            };

            return response()->stream($callback, 200, $headers);
        }
    }
}
