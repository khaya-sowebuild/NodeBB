!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){return function(t,a,n,s,e){return'<div class="row database">\r\n\t<div class="col-sm-9">\r\n\t\t'+(n(a&&a.mongo)?'\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-heading"><i class="fa fa-hdd-o"></i> [[admin/advanced/database:mongo]]</div>\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<div class="database-info">\r\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.version]]</span> <span class="text-right">'+t.__escape(n(a&&a.mongo&&a.mongo.version))+'</span><br/>\r\n\t\t\t\t\t<hr/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:uptime-seconds]]</span> <span class="text-right formatted-number">'+t.__escape(n(a&&a.mongo&&a.mongo.uptime))+'</span><br/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.storage-engine]]</span> <span class="text-right">'+t.__escape(n(a&&a.mongo&&a.mongo.storageEngine))+'</span><br/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.collections]]</span> <span class="text-right formatted-number">'+t.__escape(n(a&&a.mongo&&a.mongo.collections))+'</span><br/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.objects]]</span> <span class="text-right formatted-number">'+t.__escape(n(a&&a.mongo&&a.mongo.objects))+'</span><br/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.avg-object-size]]</span> <span class="text-right">[[admin/advanced/database:x-b, '+t.__escape(n(a&&a.mongo&&a.mongo.avgObjSize))+']]</span><br/>\r\n\t\t\t\t\t<hr/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.data-size]]</span> <span class="text-right">[[admin/advanced/database:x-gb, '+t.__escape(n(a&&a.mongo&&a.mongo.dataSize))+']]</span><br/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.storage-size]]</span> <span class="text-right">[[admin/advanced/database:x-gb, '+t.__escape(n(a&&a.mongo&&a.mongo.storageSize))+']]</span><br/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.index-size]]</span> <span class="text-right">[[admin/advanced/database:x-gb, '+t.__escape(n(a&&a.mongo&&a.mongo.indexSize))+"]]</span><br/>\r\n\t\t\t\t\t"+(n(a&&a.mongo&&a.mongo.fileSize)?'\r\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.file-size]]</span> <span class="text-right">[[admin/advanced/database:x-gb, '+t.__escape(n(a&&a.mongo&&a.mongo.fileSize))+"]]</span><br/>\r\n\t\t\t\t\t":"")+'\r\n\t\t\t\t\t<hr/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.resident-memory]]</span> <span class="text-right">[[admin/advanced/database:x-gb, '+t.__escape(n(a&&a.mongo&&a.mongo.mem&&a.mongo.mem.resident))+']]</span><br/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.virtual-memory]]</span> <span class="text-right">[[admin/advanced/database:x-gb, '+t.__escape(n(a&&a.mongo&&a.mongo.mem&&a.mongo.mem.virtual))+']]</span><br/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:mongo.mapped-memory]]</span> <span class="text-right">[[admin/advanced/database:x-gb, '+t.__escape(n(a&&a.mongo&&a.mongo.mem&&a.mongo.mem.mapped))+"]]</span><br/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t":"")+"\r\n\r\n\t\t"+(n(a&&a.redis)?'\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-heading"><i class="fa fa-hdd-o"></i> [[admin/advanced/database:redis]]</div>\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<div class="database-info">\r\n\t\t\t\t\t<span>[[admin/advanced/database:redis.version]]</span> <span class="text-right">'+t.__escape(n(a&&a.redis&&a.redis.redis_version))+'</span><br/>\r\n\t\t\t\t\t<hr/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:uptime-seconds]]</span> <span class="text-right formatted-number">'+t.__escape(n(a&&a.redis&&a.redis.uptime_in_seconds))+'</span><br/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:uptime-days]]</span> <span class="text-right">'+t.__escape(n(a&&a.redis&&a.redis.uptime_in_days))+'</span><br/>\r\n\t\t\t\t\t<hr/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:redis.connected-clients]]</span> <span class="text-right">'+t.__escape(n(a&&a.redis&&a.redis.connected_clients))+'</span><br/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:redis.connected-slaves]]</span> <span class="text-right">'+t.__escape(n(a&&a.redis&&a.redis.connected_slaves))+'</span><br/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:redis.blocked-clients]]</span> <span class="text-right">'+t.__escape(n(a&&a.redis&&a.redis.blocked_clients))+'</span><br/>\r\n\t\t\t\t\t<hr/>\r\n\r\n\t\t\t\t\t<span>[[admin/advanced/database:redis.used-memory]]</span> <span class="text-right">[[admin/advanced/database:x-gb, '+t.__escape(n(a&&a.redis&&a.redis.used_memory_human))+']]</span><br/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:redis.memory-frag-ratio]]</span> <span class="text-right">'+t.__escape(n(a&&a.redis&&a.redis.mem_fragmentation_ratio))+'</span><br/>\r\n\t\t\t\t\t<hr/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:redis.total-connections-recieved]]</span> <span class="text-right formatted-number">'+t.__escape(n(a&&a.redis&&a.redis.total_connections_received))+'</span><br/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:redis.total-commands-processed]]</span> <span class="text-right formatted-number">'+t.__escape(n(a&&a.redis&&a.redis.total_commands_processed))+'</span><br/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:redis.iops]]</span> <span class="text-right formatted-number">'+t.__escape(n(a&&a.redis&&a.redis.instantaneous_ops_per_sec))+'</span><br/>\r\n\t\t\t\t\t<hr/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:redis.keyspace-hits]]</span> <span class="text-right formatted-number">'+t.__escape(n(a&&a.redis&&a.redis.keyspace_hits))+'</span><br/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:redis.keyspace-misses]]</span> <span class="text-right formatted-number">'+t.__escape(n(a&&a.redis&&a.redis.keyspace_misses))+"</span><br/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t":"")+"\r\n\r\n\t\t"+(n(a&&a.postgres)?'\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-heading"><i class="fa fa-hdd-o"></i> [[admin/advanced/database:postgres]]</div>\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<div class="database-info">\r\n\t\t\t\t\t<span>[[admin/advanced/database:postgres.version]]</span> <span class="text-right">'+t.__escape(n(a&&a.postgres&&a.postgres.version))+'</span><br/>\r\n\t\t\t\t\t<hr/>\r\n\t\t\t\t\t<span>[[admin/advanced/database:uptime-seconds]]</span> <span class="text-right formatted-number">'+t.__escape(n(a&&a.postgres&&a.postgres.uptime))+"</span><br/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t":"")+"\r\n\r\n\t\t"+(n(a&&a.mongo)?'\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-heading" data-toggle="collapse" data-target=".mongodb-raw">\r\n\t\t\t\t<h3 class="panel-title"><i class="fa fa-caret-down"></i> [[admin/advanced/database:mongo.raw-info]]</h3>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="panel-body mongodb-raw collapse">\r\n\t\t\t\t<div class="highlight">\r\n\t\t\t\t\t<pre>'+t.__escape(n(a&&a.mongo&&a.mongo.raw))+"</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t":"")+"\r\n\r\n\t\t"+(n(a&&a.redis)?'\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-heading" data-toggle="collapse" data-target=".redis-raw">\r\n\t\t\t\t<h3 class="panel-title"><i class="fa fa-caret-down"></i> [[admin/advanced/database:redis.raw-info]]</h3>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="panel-body redis-raw collapse">\r\n\t\t\t\t<div class="highlight">\r\n\t\t\t\t\t<pre>'+t.__escape(n(a&&a.redis&&a.redis.raw))+"</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t":"")+"\r\n\r\n\t\t"+(n(a&&a.postgres)?'\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-heading" data-toggle="collapse" data-target=".postgresql-raw">\r\n\t\t\t\t<h3 class="panel-title"><i class="fa fa-caret-down"></i> [[admin/advanced/database:postgres.raw-info]]</h3>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="panel-body postgresql-raw collapse">\r\n\t\t\t\t<div class="highlight">\r\n\t\t\t\t\t<pre>'+t.__escape(n(a&&a.postgres&&a.postgres.raw))+"</pre>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t":"")+"\r\n\t</div>\r\n</div>\r\n"}});