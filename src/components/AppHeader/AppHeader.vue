<template>
    <div>
        <div>
            <h1>LOGO</h1>
        </div>
        <div>
            <router-link :to="{ name: 'home'}">
                <button>btn</button>
            </router-link>
            <router-link :to="{ name: 'aboutUs'}">
                <button>btn</button>
            </router-link>
        </div>
    </div>
</template>

<script src="./AppHeader.js"></script>