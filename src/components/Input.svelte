<script>
  
  // Props
  export let label = "";
  export let id = "";
  export let name = "";
  export let value = "";
  export let type = "text";
  export let placeholder = "";

</script>

{#if type === 'password'}
  <label for={name}>{label}</label>
    <input class="w-full border rounded-l-md rounded-r-md p-[6px]"
      type="password"
      {id}
      {name}
      {placeholder}
      bind:value
    />
    
{:else }
  <label for={name}>{label}</label>
    <input class="w-full border rounded-l-md rounded-r-md p-[6px]"
      type="text"
      {id}
      {name}
      {placeholder}
      bind:value
    />
    
{/if}

