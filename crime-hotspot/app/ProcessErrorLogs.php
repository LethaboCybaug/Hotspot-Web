public function handle()
{

$logPath = storage_path(&#39;logs/laravel.log&#39;);

if (!file_exists($logPath)) {

$this-&gt;error(&#39;Log file not found.&#39;);
return;

}

$logContent = file_get_contents($logPath);
preg_match_all(&#39;/ERROR(.*)/&#39;, $logContent, $matches);

$errorCount = count($matches[0]);
$summary = &quot;Found {$errorCount} error(s) in the log.\n&quot;;


file_put_contents(storage_path(&#39;logs/error_summary.log&#39;), $summary);
$this-&gt;info($summary);

}