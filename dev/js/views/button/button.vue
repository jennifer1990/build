<template>

	<br>
	<br>
	<br>

	<btn type="primary">primary</btn>
	<btn type="success">success</btn>
	<btn type="warning">warning</btn>
	<btn type="danger">danger</btn>
	<btn type="info">info</btn>
	<btn type="default">default</btn>
	<btn></btn>

	<br>
	<br>
	<br>

	<btn type="primary" size="large">large</btn>
	<btn type="primary">default</btn>
	<btn type="primary" size="small">small</btn>
	<btn type="primary" size="mini">mini</btn>

	<br>
	<br>
	<br>

	<btn type="primary" :plain="true">primary plain</btn>
	<btn type="success" :plain="true">success plain</btn>
	<btn type="warning" :plain="true">warning plain</btn>
	<btn type="danger" :plain="true">danger plain</btn>
	<btn type="info" :plain="true">info plain</btn>
	<btn type="default" :plain="true">default plain</btn>

	<br>
	<br>
	<br>

	<btn type="primary" :disabled="true">primary disabled</btn>
	<btn type="success" :disabled="true">success disabled</btn>
	<btn type="warning" :disabled="true">warning disabled</btn>
	<btn type="danger" :disabled="true">danger disabled</btn>
	<btn type="info" :disabled="true">info disabled</btn>

</template>

