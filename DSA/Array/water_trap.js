function trapRainWater(heights) {
  // PLACEHOLDER_JAVASCRIPT_TRAP_RAIN_WATER_BODY
  const l_max = [0];
  const r_max = [];
  let  n = heights.length;
  let lmax = 0;
  let rmax = 0;

  for(let i = 1 ; i <= n-1 ; i++){
    if(lmax < heights[i-1]){
      l_max[i] = heights[i-1];
      lmax = heights[i-1]
    }
    else{
      l_max[i] = lmax;
    }
  }

   for(let i = n-2 ; i >=0 ; i--){
    if(rmax < heights[i+1]){
      r_max[i] = heights[i+1];
      rmax = heights[i+1]
    }
    else{
      r_max[i] = rmax;
    }
  }

  r_max[n-1] = 0;
  let sum = 0;

  for(let i = 1 ; i <= n-2 ; i++){
    let water_h = Math.min(l_max[i], r_max[i]);
   
    if (water_h > heights[i]){
      sum = sum + water_h - heights[i];
    }
  }
  return sum;
};
